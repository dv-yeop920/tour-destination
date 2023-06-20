import { styled } from "styled-components";


            export const Navbar = styled.nav`
                background-color: white;
                box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
                margin-bottom: 30px;
                position: sticky;
                top: 0;
                z-index:1;
            `;

            export const NavTitle = styled.h1`
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

            export const Board = styled.ul`
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            `;
            export const Li = styled.li`
                list-style: none;
                padding: 0px 13px 0px 13px;
                border-bottom: 0.1px solid #ccc;
                cursor: pointer;
                background-color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 80%;
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
                box-shadow: rgba(0, 0, 0, 0.2) -4px 9px 25px -4px;
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
                cursor: pointer;
                box-shadow: rgba(0, 0, 0, 0.2) -4px 9px 25px -10px;
            `;

            export const InputBox = styled.div`
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 20px;
            `;

            export const ScrollToTopButton = styled.button`
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: #333;
                color: #fff;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 15px;
                padding-left: 11px;
                box-shadow: rgba(0, 0, 0, 0.2) -4px 9px 25px 2px;
                `;

                export const ScrollToTopIcon = styled.span`
                `;
                
