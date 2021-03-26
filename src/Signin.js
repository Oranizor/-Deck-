import React from "react";
import styled from "styled-components";

const Background=styled.div`
  background-color:blue;
  width: 500px;
  height: 600px;
  margin: 30px auto;
  border-radius: 15px;
  box-shadow: 0px 3px 6px rgba(0,0,0,0.1);
  position: relative;
  padding:30px;
`

const TitlePosition=styled.div`
  background-color: red;
  height: 60px;
  width: 100%;
  position: relative;
  
`
const InputPosition=styled.div`
  margin-top: 10px;
  background-color: coral;
  height: 120px;
  width: 100%;
`

const SubmitPosition=styled.div`
  margin-top: 10px;
  background-color: papayawhip;
  height: 60px;
  width: 100%;
`

const Title=styled.div`
  height: 100%;
  width: 100px;
  background-color: aqua;
  position: absolute;
  font-size: 18px;
  font-weight: bolder;
  text-align: center;
  line-height: 56px;
`
const Bar=styled.div`
  background-color: saddlebrown;
  height: 8px;
  border-radius: 10px;
  width: 80px;
  position: absolute;
  bottom:0;
  left: 50%;
  transform: translateX(-50%);
`
export default class Signin extends React.Component{
    render() {
        return(
            <div>
                <Background>
                    <TitlePosition>
                        <Title style={{left:"0px"}}>
                            登录
                            <Bar/>
                        </Title>
                        <Title style={{left:"110px"}}>
                            自动登录
                            <Bar/>
                        </Title>
                    </TitlePosition>
                    <InputPosition>
                        333

                    </InputPosition>
                    <InputPosition>
                        33

                    </InputPosition>
                    <div style={{marginTop:"10px",backgroundColor:"yellow",height:"70px",width:"100%"}}>

                    </div>
                    <div style={{marginTop:"10px",backgroundColor:"yellow",height:"70px",width:"100%"}}>

                    </div>
                    <SubmitPosition>

                    </SubmitPosition>
                </Background>
            </div>
        )
    }
}