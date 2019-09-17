import *as React from 'react';
import { Button,Table,Upload } from 'antd';
import *as XLSX from 'xlsx';

export interface IExcelState{
    columns?:Object
    data?:Object
    fileList?:[]
}

class Excel extends React.Component{

    readonly state={
        columns:[{title:"姓名",dataIndex:"name"},{title:"年龄",dataIndex:"age"},{title:"地址",dataIndex:"address"}],
        data:[],
        fileList:[]
    }

    formatTitleOrFileld = (a, b) => {
        const entozh = {};
        this.state.columns.forEach(item => {
            entozh[item[a]] = item[b]
        })
        return entozh;
    }

    handleImpotedJson = (array, file) => {
       
        const header = array[0];
        const entozh = this.formatTitleOrFileld('title', 'dataIndex');
        const firstRow = header.map(item => entozh[item]);

        const newArray = [...array];

        newArray.splice(0, 1);

        const json = newArray.map((item, index) => {
            const newitem = {};
            item.forEach((im, i) => {
                const newKey = firstRow[i] || i;
                newitem[newKey] = im
            })
            return newitem;
        });

        const formatData = json.map(item => ({
            name: item.name,
            age: item.age,
            address: item.address,
        }))

        this.setState({ data: formatData, fileList: [file] });

        return formatData;
    }

    sheet2blob = (sheet, sheetName) => {
        sheetName = sheetName || 'sheet1';
        var workbook = {
          SheetNames: [sheetName],
          Sheets: {}
        };
        workbook.Sheets[sheetName] = sheet; // 生成excel的配置项
  
        var wopts = {
          bookType: 'xlsx', // 要生成的文件类型
          bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
          type: 'binary'
        };
        var wbout = XLSX.write(workbook, wopts);
        var blob = new Blob([s2ab(wbout)], {
          type: "application/octet-stream"
        }); // 字符串转ArrayBuffer
        function s2ab(s) {
          var buf = new ArrayBuffer(s.length);
          var view = new Uint8Array(buf);
          for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
          return buf;
        }
  
        return blob;
    }

    openDownloadDialog = (url, saveName) => {
        if (typeof url == 'object' && url instanceof Blob) {
          url = URL.createObjectURL(url); // 创建blob地址
        }
        var aLink = document.createElement('a');
        aLink.href = url;
        aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
        var event;
        if (window.MouseEvent) event = new MouseEvent('click');
        else {
          event = document.createEvent('MouseEvents');
          event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        }
        aLink.dispatchEvent(event);
    }

    handleExportAll = (e) => {
        const entozh = {
          "name":"姓名",
          "age":"年龄",
          "address":"地址"
        }

        const nowdata = this.state.data;

        const json = nowdata.map((item) => {
          return Object.keys(item).reduce((newData, key) => {
            const newKey = entozh[key] || key
            newData[newKey] = item[key]
            return newData
          }, {})
        });
  
  
        const sheet = XLSX.utils.json_to_sheet(json);
 
        this.openDownloadDialog(this.sheet2blob(sheet,undefined), `全部信息.xlsx`);
   
    }

    handleExportDocument = (e) => {
        const entozh = {
          "name":"姓名",
          "age":"年龄",
          "address":"地址"
        }

        let nowdata = [
            {"name":""},
            {"age":""},
            {"address":""},
            
        ];

        const json = nowdata.map((item) => {
          return Object.keys(item).reduce((newData, key) => {
            const newKey = entozh[key] || key
            newData[newKey] = item[key]
            return newData
          }, {})
        });
  
  
        const sheet = XLSX.utils.json_to_sheet(json);
 
        this.openDownloadDialog(this.sheet2blob(sheet,undefined), `标准格式文件.xlsx`);
   
    }

    render(){

        const { columns,data,fileList }=this.state;

        const uploadProps={
            onRemove: file => {
                this.setState(state => ({
                    data:[],
                    fileList:[]
                }));
            },
            accept: ".xls,.xlsx,application/vnd.ms-excel",
            beforeUpload: (file) => {
                const _this=this;
                const f = file;
                const reader = new FileReader();
                reader.onload = function (e) {

                    const datas = e.target.result;

                    const workbook = XLSX.read(datas, {
                        type: 'binary'
                    });//尝试解析datas

                    const first_worksheet = workbook.Sheets[workbook.SheetNames[0]];//是工作簿中的工作表的有序列表

                    const jsonArr = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 });//将工作簿对象转换为JSON对象数组

                    _this.handleImpotedJson(jsonArr, file);
                };
                reader.readAsBinaryString(f);
                return false;
            },
            fileList,
        };

        return(
            <div>
                <Upload {...uploadProps}>
                    <Button type="primary" >Excel导入</Button>
                </Upload>

                <Button type="primary" onClick={this.handleExportAll}>Excel导出数据</Button>

                <Button type="primary" onClick={this.handleExportDocument}>Excel导出格式文件</Button>

                <Table columns={columns} dataSource={data} bordered></Table>

                
            </div>
        )
    }
}

export default Excel;