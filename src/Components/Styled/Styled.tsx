import React, { useState } from 'react';
import styled from 'styled-components';
const Styled = () => {
    const data = [
        { title: 'This is box 1' },
        { title: 'This is box 2' },
        { title: 'This is box 3' },
        { title: 'This is box 4' },
        { title: 'This is box 5' },

    ]


    const Container = styled.div`
        display:flex;
        justify-content:space-around;
        align-items:center;
        border:1px solid black;
        padding:13px;
        flex-wrap:wrap;
    `
    const Box = styled.div`
    width:200px;
    height:200px;
    border:1px solid gray;
    background-color:tomato;
    `

    const Title = styled.h4`
    font-size: 1.5em;
    text-align: center;
    border:1px solid palevioletred;
    color: white;
    padding:10px 0px;
    `
    const NavBar = styled.nav`
    width:100%;
    height:90px;
    border:1px solid gray;
    background-color:tomato;
    `;
    const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
    const [btnValue, setBtnValue] = useState('Button')
    const reverseButton = (props: any) => {
        // console.log(props.target.)
        const text = props.target.innerText;
        const revValue = text.split('').reverse();
        setBtnValue(revValue);

    }
    return (
        <div>
            <NavBar><h2>This is Navbar</h2></NavBar>
            <Container>
                {
                    data.map((item, index) => {
                        return (
                            <Box>
                                <Title>{item.title}</Title>
                            </Box>
                        )
                    })
                }

            </Container>
            <Button onClick={reverseButton}>{btnValue}</Button>
        </div>
    );
};

export default Styled;