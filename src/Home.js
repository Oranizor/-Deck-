import React from 'react';
import styled from 'styled-components';
import axios from "axios";

const Result=styled.div`
  margin-top: 10px;
  background-color: #f6f6f6;
  border: 1px darkgray solid;
  line-height: 60px;
  border-radius: 10px;
  display: flex;
  align-content: center;
  justify-content: right;
  font-family: Consolas;
  font-size: 16px;
`

const SubResult=styled.div`
  min-width:100px;
  margin-right: 10px;
`
const Reddiv=styled.div`
  background-color: red;
  height: 20px;
  width: 100%;
`
const Input=styled.input`
  margin: 10px;
  height: 32px;
  width: 200px;
  border: darkgrey 1px solid;
  outline: none;
  border-radius: 8px;
  font-size: 18px;
  padding-left: 20px;
  font-family: Consolas;
`

const Background=styled.div`
  display: flex;
`

const Left=styled.div`
  width: 300px;
  margin-left: 10px;
`
const Select=styled.select`
  margin: 10px;
  height: 32px;
  width: 200px;
  border: darkgrey 1px solid;
  outline: none;
  border-radius: 8px;
  font-size: 18px;
  padding-left: 20px;
  font-family: Consolas;
`
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.hasbeenselected=false;
    }

    state={
        data:null,
        addcus:{
            name:null,
            phoneNumber:null,
            address:null,
        },
        delcus:{
            id:null,
            name:null,
            phoneNumber:null,
            address:null,
        },
        editcus:{
            id:null,
            name:null,
            phoneNumber:null,
            address:null,
        }
    }


    componentDidMount() {
        axios({
            method:'GET',
            url:'http://127.0.0.1:8000/dispatcher/?action=list_customer',
        }).then(res=>{
            console.log("成功axios,",res.data.data);
            this.setState({data:res.data.data})
        },res=>{
            console.log("失败",res)
        })
    }

    handleSubmit1=()=>{
        //获取全部的用户数据
        axios({
            method:'GET',
            url:'http://127.0.0.1:8000/dispatcher/?action=list_customer',
        }).then(res=>{
            console.log("获取的axios,",res.data.data);
            this.setState({data:res.data.data})
        },res=>{
            console.log("失败",res)
        })
    }

    handleSubmit2=()=>{
        //新增用户
        axios({
            method:'post',
            url:'http://127.0.0.1:8000/dispatcher/',
            data: {
                action:"add_customer",
                data:{
                    name:this.state.addcus.name,
                    phoneNumber:this.state.addcus.phoneNumber,
                    address:this.state.addcus.address
                }
            },
        }).then(res=>{
            console.log("新增的axios,",res.data);
            //this.setState({data:res.data})
        },res=>{
            console.log("失败",res)
        })
        this.setState({addcus:{...this.state.addcus,name:null,phoneNumber:null,address:null}})
    }



    handleSubmit3=()=>{
        //编辑用户
        axios({
            method:'post',
            url:'http://127.0.0.1:8000/dispatcher/',
            data:{
                action:"modify_customer",
                id:this.state.editcus.id,
                newdata:{
                    name:this.state.editcus.name,
                    address:this.state.editcus.address,
                    phoneNumber:this.state.editcus.phoneNumber,
                },
            }
        }).then(res=>{
            console.log("编辑的axios,",res.data);
            //this.setState({data:res.data})
        },res=>{
            console.log("失败",res)
        })
    }

    handleSubmit4=()=>{
        //删除用户
        console.log("要删除的",this.state.delcus.id);
        axios({
            method:'post',
            url:'http://127.0.0.1:8000/dispatcher/',
            data: {
                action:"delete_customer",
                id:this.state.delcus.id
            },
        }).then(res=>{
            console.log("删除的axios,",res.data);
            //this.setState({data:res.data})
        },res=>{
            console.log("失败",res)
        })
        this.hasbeenselected=false;
        this.setState({delcus:{...this.state.delcus,name:null,phoneNumber:null,address:null}})
    }



    List=(data)=>{
        return(
            <div>

                {data.map((dat)=>{
                    //console.log("本次dat",dat)
                    return(
                        <Result>

                            <SubResult style={{marginLeft:"20px"}}>
                                编号:{dat.id}
                            </SubResult>
                            <SubResult>
                               姓名:{dat.name}
                            </SubResult>
                            <SubResult>
                                电话:{dat.phoneNumber}
                            </SubResult>
                            <SubResult>
                                地址:{dat.address}
                            </SubResult>
                        </Result>
                        )
                    })}
            </div>
        )
    }

    NoList=()=>{
        return(
            <Result>
                尚未获取
            </Result>
        )
    }

    Show=(string)=> {
        if(this.hasbeenselected===true){
            if(string==="name"){
                return(
                    <option>{this.state.delcus.name}</option>
                )
            }else if(string==="phoneNumber"){
                return (
                    <option>{this.state.delcus.phoneNumber}</option>
                )
            }else if(string==="address"){
                return (
                    <option>{this.state.delcus.address}</option>
                )
            }

        }else {
            if(string==="name"){
                return (
                    <>
                        {this.state.data===null?this.NoList():this.state.data.map((dat)=>{
                            return(
                                <option>{dat.name}</option>
                            )
                        })}}
                    </>
                )
            }else if(string==="phoneNumber"){
                return (
                    <>
                        {this.state.data===null?this.NoList():this.state.data.map((dat)=>{
                            return(
                                <option>{dat.phoneNumber}</option>
                            )
                        })}}
                    </>
                )
            }else if(string==="address"){
                return (
                    <>
                        {this.state.data===null?this.NoList():this.state.data.map((dat)=>{
                            return(
                                <option>{dat.address}</option>
                            )
                        })}}
                    </>
                )
            }

        }

    }


    render() {
        console.log("state",this.state)
        return(
            <div>
                <h2>用户列表</h2>
                <button onClick={this.handleSubmit1}>获取用户数据</button>
                <div>
                    {this.state.data===null?this.NoList():this.List(this.state.data)}
                </div>
                <Background>
                    <Left>
                        <h2>添加用户</h2>
                        <button onClick={this.handleSubmit2}>添加用户</button>
                        <div>
                            姓名<Input onChange={(e)=>{
                            this.setState({addcus:{...this.state.addcus,name:e.target.value}})
                        }}/>
                        </div>
                        <div>
                            电话<Input onChange={(e)=>{
                            this.setState({addcus:{...this.state.addcus,phoneNumber:e.target.value}})
                        }}/>
                        </div>
                        <div>
                            地址<Input onChange={(e)=>{
                            this.setState({addcus:{...this.state.addcus,address:e.target.value}})
                        }}/>
                        </div>
                    </Left>
                    <Left>
                        <h2>删除用户</h2>
                        <button onClick={this.handleSubmit4}>删除用户</button>
                        <div>
                            姓名
                            <Select onChange={(e)=>{
                                console.log(e.target.value)
                                let delphone="";
                                let deladd="";
                                let delid="";
                                this.state.data.map((dat)=>{
                                    if(dat.name===e.target.value){
                                        delphone=dat.phoneNumber;
                                        deladd=dat.address;
                                        delid=dat.id;
                                    }
                                })
                                this.setState({
                                    delcus:{...this.state.delcus,name:e.target.value,address:deladd,phoneNumber:delphone,id:delid},
                                })
                                this.hasbeenselected=true;
                                }}>
                                {this.Show("name")}
                            </Select>
                        </div>
                        <div>
                            电话
                            <Select onChange={(e)=>{
                                console.log(e.target.value)
                                let delname="";
                                let deladd="";
                                let delid="";
                                this.state.data.map((dat)=>{
                                    if(dat.phoneNumber===e.target.value){
                                        delname=dat.name;
                                        deladd=dat.address;
                                        delid=dat.id;
                                    }
                                })
                                this.setState({
                                    delcus:{...this.state.delcus,name:delname,address:deladd,phoneNumber:e.target.value,id:delid},
                                })
                                this.hasbeenselected=true;
                            }}>
                                {this.Show("phoneNumber")}
                            </Select>
                        </div>
                        <div>
                            地址
                            <Select onChange={(e)=>{
                                console.log(e.target.value)
                                let delname="";
                                let delphone="";
                                let delid="";
                                this.state.data.map((dat)=>{
                                    if(dat.address===e.target.value){
                                        delname=dat.name;
                                        delphone=dat.address;
                                        delid=dat.id;
                                    }
                                })
                                this.setState({
                                    delcus:{...this.state.delcus,name:delname,address:e.target.value,phoneNumber:delphone,id:delid},
                                })
                                this.hasbeenselected=true;
                            }}>
                                {this.Show("address")}
                            </Select>
                        </div>
                    </Left>
                    <Left>
                        <div>
                            <h2>编辑用户</h2>
                            <button onClick={this.handleSubmit3}>编辑用户</button>
                            <div>
                                编号
                                <Select onChange={(e)=>{
                                    console.log(e.target.value)
                                    let delphone="";
                                    let deladd="";
                                    let delname="";
                                    this.state.data.map((dat)=>{
                                        console.log("没对上？",dat)
                                        if(Number(dat.id)===Number(e.target.value)){
                                            console.log("对上了",dat)
                                            delphone=dat.phoneNumber;
                                            deladd=dat.address;
                                            delname=dat.name;
                                        }
                                        this.setState({
                                            editcus:{...this.state.editcus,name:delname,address:deladd,phoneNumber:delphone,id:e.target.value},
                                        })
                                    })

                                }}>
                                    {this.state.data===null?this.NoList():this.state.data.map((dat)=>{
                                        return(
                                            <option>{dat.id}</option>
                                        )
                                    })}}
                                </Select>
                                <div>
                                    姓名<Input value={this.state.editcus.name}
                                             onChange={(e)=>{
                                                 this.setState({editcus:{...this.state.editcus,name:e.target.value}})
                                             }}
                                />
                                </div>
                                <div>
                                    电话<Input value={this.state.editcus.phoneNumber}
                                             onChange={(e)=>{
                                                 this.setState({editcus:{...this.state.editcus,phoneNumber:e.target.value}})
                                             }}
                                />
                                </div>
                                <div>
                                    地址<Input value={this.state.editcus.address}
                                             onChange={(e)=>{
                                                 this.setState({editcus:{...this.state.editcus,address:e.target.value}})
                                             }}
                                />
                                </div>
                            </div>

                        </div>
                    </Left>
                </Background>





            </div>
        )
    }
}

export default Home