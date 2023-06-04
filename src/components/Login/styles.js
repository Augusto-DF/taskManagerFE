import styled from "styled-components";

export const Form = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  width: 520px;
  height: 60px;
  padding: 8px 16px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  border: 1px solid #c7c3c2;
  border-radius: 16px;
`;

export const Button = styled.button`
  padding: 16px 32px;
  font-size: 16px;
  color: #e8ebf9;
  background-color: #53b9d2;
  border: 1px solid #53b9d2;
  border-radius: 60px;
  font-weight: bold;
`;
