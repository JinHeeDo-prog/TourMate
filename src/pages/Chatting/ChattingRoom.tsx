import React from "react"
import styled from "styled-components"
import { useState, useEffect } from "react"




const ChattingRoom = () => {
    const plan = "11 : 00  행궁동 도착 -> 13 : 00 밥 -> 14: 00 카페";
    const modalText = "계획들어올 공간."
   
    const [modal, setModal] = useState(false)
    

    
    return(
        <Room>
            <RoomHeader>
                <ImageBox>
                    <Img src="/User_Image/Profile_Blue.jpg"/>
                    <OtherImg src = "/User_Image/Profile_Purple.jpg"/>
                </ImageBox>
                <ChattingTitle>수원행궁가자</ChattingTitle>
                
            </RoomHeader>
            <ChattingPlan onClick={()=>setModal(!modal)}>{plan}</ChattingPlan>
            {
            	modal == true ? <Modal>{modalText}</Modal> : null  //기계역할
            }
            <ImgChat>
                <UserImg src = "/User_Image/Profile_Blue.jpg" />
                <Chatting />
            </ImgChat>
            <Camera src = "/ChattingRoom_Picture/camera.png/"></Camera>
            <ChattingInput />
            <MyChatting />
            <Send>
                <SendFont>전송</SendFont>
            </Send>
        </Room>
        
    ); 
    
}


const Room = styled.div`
    width: 390px;
    height: 100%;
    background-color: white;
    margin-top: 70px;
`;
const RoomHeader = styled.div`
    display: flex;
    width: 390px;
    height: 80px;
    background-color: #B4D8E7;
`;
const Img = styled.img`
    position: relative;
    width: 35px;
    height: 35px;
    margin-left : 9px;
    margin-top: 8px;
    border-radius: 17px;
`;
const OtherImg = styled.img`
    position: relative;
    width: 35px;
    height: 35px;
    margin-left : 37px;
    margin-top: -7px;
    border-radius: 17px;
`;
const ImageBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const ChattingTitle = styled.p`
    margin-top: 31px;
    margin-left: 15px;
    font-size : 22px;
    font-weight: bold;
    
`;


const ChattingPlan = styled.div`
    width: 350px;
    height: 45px;
    margin-left: 15px;
    margin-top: 35px;
    font-weight: bold;
    word-break:break-all;
    overflow:hidden;
	text-overflow:ellipsis;
    padding : 0.5px 2px 0px 3px;
    background-color: lightgray;
    border-radius: 17px;
`;
const ImgChat = styled.div`
    display: flex;
    margin-top: 20px;
`;
const UserImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-left: 15px;
`;
const Chatting = styled.div`
    display: flex;
    width: 270px;
    padding: 8px;
    margin-left: 27px;
    border-radius: 25px; 
    background-color: lightgray ;
`;
const Camera = styled.img`
    position: fixed;
    bottom: 0;
    width: 25px;
    height: 20px;
    margin: 0px 30px 40px 20px;
`
const ChattingInput = styled.input`
    position: fixed;
    width: 260px;
    height: 100px;
    word-break:break-all;
    bottom: 0;
    margin : 0 0 30px 60px;
    border-radius: 30px;
    border : 1px solid #0160D6;
`

const Send = styled.button`
    position : fixed;
    width: 45px;
    height: 35px;
    bottom: 0;
    margin: 0 0 30px 330px;
    border-radius: 15px;
    background-color: #0160D6;
    
`
const SendFont = styled.p`
    font-size: 12px;
    font-weight: bold;
    color: #ffffff;
`
const Modal = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    margin-top: 20px;
    padding: 20px;
    word-break:break-all;
    overflow:hidden;
	text-overflow:ellipsis;
    background-color: lightblue;
    text-align: left;
`
const MyChatting = styled.div`
    display: flex;
    justify-content: center;
    
    margin: 30px 50px 0px 50px;
    width: 300px;
    height: 50px;
    padding: 8px;  
    border-radius: 25px; 
    background-color: lightgray ;
`;


export default ChattingRoom;