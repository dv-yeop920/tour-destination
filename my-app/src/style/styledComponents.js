import { styled } from "styled-components";


            export const Navbar = styled.nav`
                background-color: white;
                box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;
                position: sticky;
                top: 0;
                z-index:1;
            `;

            export const NavTitle = styled.h1`
                font-size: 30px;
                margin-left: 50px;
                margin-right: 100px;
                cursor: pointer;
            `;

            export const MenuList = styled.ul`
                list-style: none;
                display: flex;
                align-items: center;
            `;

            export const MenuItem = styled.li`
                font-size: 17px;
                font-weight: 600;
                margin-right: 50px;
                cursor: pointer;
            `;

            export const Board = styled.div`
                max-width: 1150px;
                margin: 0 auto;
                list-style: none;
            `;
            export const Li = styled.li`
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #ccc;
                padding:5px;
                cursor: pointer;
            `;
            export const Title = styled.h3`
                margin-bottom: 20px;
            `;

            export const Author = styled.p`
                font-size: 13px;
                color:#888;
            `;

            export const Button = styled.button`
                padding: 10px 23px 10px 23px;
                border: none;
                color: white;
                background-color: #27ae60;
                border-radius: 10px;
                margin-right: 20px;
                cursor: pointer;
                box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px 5px;
            `;

            export const Input = styled.input`
                flex:0.5;
                text-align: center;
                margin-right: 10px;
                background-color: #eee;
                padding: 10px;
                font-size: 16px;
                border: none;
                border-radius: 10px;
                width: 100px;
                cursor: pointer;
                box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -10px;
            `;