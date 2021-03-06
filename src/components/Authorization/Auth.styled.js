import styled from '@emotion/styled/macro';

export const Section = styled.section`
  width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadTitle = styled.h1`
  font-size: 40px;
  margin: 15px 0;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  /* height: 50px; */
`;

export const FormInput = styled.input`
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  width: 200px;
  height: 25px;
  background-color: rgba(0, 0, 255, 0.1);
  border: none;
  color: white;

  &:focus,
  &:hover {
    outline: none;
    background-color: rgba(0, 255, 255, 0.1);
  }
`;

export const SubmitBtn = styled.button`
  margin-top: 5px;
  width: 150px;
  height: 25px;
  background-color: rgba(0, 0, 255, 0.1);
  border: none;
  color: white;
  cursor: pointer;

  &:focus,
  &:hover {
    outline: none;
    background-color: rgba(0, 255, 255, 0.1);
  }

  &:active {
    background-color: rgba(0, 0, 255, 0.1);
  }
`;

export const AuthInfo = styled.p`
  margin-top: 20px;
  font-size: 14px;
`;
