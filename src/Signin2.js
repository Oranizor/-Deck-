import React from 'react';
import styled from 'styled-components';


const Background=styled.div`
  position:absolute;
  top:71px;
  bottom: 0;
  right: 0;
  left: 0;
`

const Window=styled.div`
  height: 540px;
  width: 450px;
  padding: 15px 40px 15px 40px;
  background-color: white;
  border-radius: 10px;
  margin: auto;
  box-shadow: 0 3px 6px #E9E9E9;
  position: relative;
  box-sizing:border-box;
  z-index: 2;
`
const Window2=styled.div`
  height: 70px;
  width: 450px;
  background-color: #F6F6F6;
  border-radius: 10px;
  box-shadow: 0 3px 6px #E9E9E9;
  position: relative;
  margin: auto;
  box-sizing:border-box;
  left: 0;
  top:-10px;
  z-index: 1;
  line-height: 80px;
  text-align: center;
  color: #AEAEAE;
`

const Font1=styled.div`
  font-size: 16px;
  //background-color:grey;
  padding:0 5px 0 5px;
  margin-right: 10px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  display: inline-block;
  position: relative;
  font-weight: ${props => props.choose===true?"bolder":"normal"};
`

const Choosebar=styled.div`
  display: ${props => props.choose===true?"block":"none"};
  background-color: green;
  height: 6px;
  width: 56px;
  position: absolute;
  bottom:0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
`

const Font2=styled.div`
  position: relative;
  //background-color: grey;
  height: 40px;
  line-height: 40px;
  margin-top:20px;
  margin-bottom: 5px;
`

const Font3=styled.div`
  position: absolute;
  right: 0;
  //background-color: grey;
  height: 40px;
  line-height: 40px;
  color: ${props=>props.choose===true?"#8A8A8A":"#008A2C"};
`
const Font4=styled.div`
  position: relative;
  //background-color: grey;
  height: 40px;
  line-height: 40px;
  margin-top:8px;
  color: #8A8A8A;
`
const Font5=styled.div`
  font-size: 28px;
  color:#84827D;
  margin: 60px auto 40px;
  position: relative;
  width: 100%;
  text-align: center;
`


const Input=styled.input`
  width: 100%;
  height: 50px;
  border-radius: 7px;
  border: #E5E5E5 1.5px solid;
  box-sizing:border-box;
  outline: none;
  font-size: 18px;
  padding-left: 16px;
  &:focus{
    border: #2D975C 1.5px solid;
  }
`

const CircleOut = styled.div`
  position: absolute;
  height: 21px;
  width: 21px;
  border-radius: 5px;
  background-color: ${props => props.choose === false ? "#FFFFFF" : "#008A2C"};
  border: ${props => props.choose === false ? "#E4E4E4 1px solid;" : "none"};
  top: 50%;
  transform: translateY(-50%);
`
const CircleIn = styled.div`
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
`
const Button=styled.div`
  margin: auto;
  margin-top: 20px;
  font-size: 16px;
  width: 160px;
  height: 60px;
  background-color: #2D975C;
  color:white;
  line-height: 60px;
  text-align: center;
  border-radius: 35px;
  &:hover{
    background-color: #008A2C;
  }
  &:active{
    background-color: #006821;
  }
`

export default class Register extends React.Component{
    state={
        signInByPassword:true,
        agree:false,
    }


    render() {
        const complete_icon = (
            <CircleIn>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.121" height="10.121" viewBox="0 0 14.121 10.121">
                    <g id="组_675" data-name="组 675" transform="translate(1.061 1.061)">
                        <line id="直线_113" data-name="直线 113" x2="4" y2="4" transform="translate(0 4)" fill="none"
                              stroke="#fff" strokeLinecap="round" strokeWidth="1.5"/>
                        <line id="直线_114" data-name="直线 114" x1="8" y2="8" transform="translate(4)" fill="none"
                              stroke="#fff" strokeLinecap="round" strokeWidth="1.5"/>
                    </g>
                </svg>
            </CircleIn>

        )



        return(
            <Background>
                <Font5>登陆中心</Font5>
                <Window>
                    <Font1
                        onClick={()=>{
                            this.setState({
                                signInByPassword:true,
                            })
                        }}
                        choose={this.state.signInByPassword}
                    >
                        <Choosebar choose={this.state.signInByPassword} />
                        账号登陆
                    </Font1>
                    <Font1 onClick={()=>{
                        this.setState({
                            signInByPassword:false,
                        })
                    }}
                           choose={!this.state.signInByPassword}
                    >
                        <Choosebar choose={!this.state.signInByPassword}/>
                        免密码登录
                    </Font1>
                    <Font2>{this.state.signInByPassword===true?"电子邮箱/手机号":"手机号"}</Font2>
                    <Input/>
                    <Font2 >
                        <Font3  choose={this.state.signInByPassword}>{this.state.signInByPassword===true?"忘记密码？":"获取短信验证码"}</Font3>
                        {this.state.signInByPassword===true?"密码":"验证码"}
                    </Font2>
                    <Input type="password" style={{ letterSpacing:"4px" ,fontWeight:"bolder"}}/>

                    <Font4 style={{marginTop:"20px"}} onClick={()=>{
                        this.setState({
                            agree:!this.state.agree,
                        })
                    }} >
                        <Font4 style={{paddingLeft: "30px"}}>同意AIGAD用户协议</Font4>
                        <CircleOut choose={this.state.agree}>
                            {complete_icon}
                        </CircleOut>
                    </Font4>
                    <Font4>
                        使用企业账户登录
                    </Font4>
                    <Button>
                        登录
                    </Button>

                </Window>
                <Window2>
                    还没有账户？创建账户
                </Window2>

            </Background>
        )
    }
}