import styled from 'styled-components'

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  align-self: end;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: #ccc;
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + .slider:after {
    transform: translateX(-28px);
    content: "🌞";
  }

  transition: all 1s ease-in-out;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2196f3;
  transition: 0.4s;
  border-radius: 20px;

  &:after {
    position: absolute;
    content: "🌛";
    height: 24px;
    width: 24px;
    right: 4px;
    bottom: 4px;
    transition: 0.4s;
    border-radius: 50%;
  }
`;