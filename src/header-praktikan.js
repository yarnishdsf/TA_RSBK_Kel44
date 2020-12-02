import styled, {css} from 'styled-components';

export default styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 20px;
    ${(props) =>
        props.background &&
        props.bottom &&
        props.font &&
        css`
            background:${(props) => props.background};
            border-bottom:${(props) => props.bottom};
            color:${(props) => props.font};
        `}
`;

 
//   .card-header {
//     color: #0097A7;
//     text-align: center;
//     font-size: 12px;
//     font-weight: 600;
//     border-bottom: 1px solid #80DEEA;
//     background-color: #E0F7FA;
//     padding: 5px 10px;
//   }
  
//   .card-main {
//     display: flex;              /* Children use Flexbox */
//     flex-direction: column;     /* Rotate Axis to Vertical */
//     justify-content: center;    /* Group Children in Center */
//     align-items: center;        /* Group Children in Center (on cross axis) */
//     padding: 15px 0;            /* Add padding to the top/bottom */
//   }
  
//   .material-icons {
//     font-size: 36px;
//     color: #0097A7;
//     margin-bottom: 5px;
//   }
  
//   .main-description {
//     color: #0097A7;
//     font-size: 12px;
//     text-align: center;
//   }
  
//   /* IDs for additional colors*/
//   /* Colors from Google Material Design: https://material.io/guidelines/style/color.html*/
  
//   #or-border {
//     border-color: #FFE082;
//   }
  
//   #or-header {
//     background-color: #FFF8E1;
//     border-color: #FFE082;
//     color: #FFA000;
//   }
  
//   #or-color {
//     color: #FFA000;
//   }
  
//   #red-border {
//     border-color: #EF9A9A;
//   }
  
//   #red-header {
//     background-color: #FFEBEE;
//     border-color: #EF9A9A;
//     color: #D32F2F;
//   }
  
//   #red-color {
//     color: #D32F2F;
//   }





// textAlign: 'center' , width: '50%', margin: '0 25% 0 25%', background: '#89CFF0 !important'