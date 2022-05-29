import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const CustomToastContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 200px;
    max-width: 250px;
    height: 30px;
    margin: 3px auto;
    padding: 15px;
  }
  .Toastify__toast-body {
    font-size: 14px;
  }
  .Toastify__progress-bar {
  }
  .Toastify__toast--error {
    border: 1px solid #eb5757;
    border-radius: 50px;
    background: #fae1e2;
    color: #333;
  }
  .Toastify__toast--success {
    border: 1px solid #3a9ea5;
    border-radius: 50px;
    background: #f0f9fa;
    color: #333;
  }
  .Toastify__toast--warning {
    border: 1px solid #e78326;
    border-radius: 50px;
    background: #fadfc5;
    color: #333;
  }
`;
