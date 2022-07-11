import { AppBar, Page, LogoImg, IconImg, FloatingButton, PageBody } from "./style";
import Logo from "../../assets/closet_store2.svg";
import IconSignin from "../../assets/log-in-outline.svg";
import IconSignout from "../../assets/log-out-outline.svg";
import IconBack from "../../assets/chevron-back-outline.svg"
import UserContext from "../../context/UserContext.js";
import { useContext } from "react";
import IconCart from "../../assets/cart-outline.svg";
import { useNavigate } from "react-router-dom";

export default function DefaultPage({ children, back, showFloat=true }) {

    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate();




    return (
        <Page>
            {showFloat ? <FloatingButton onClick={() => navigate("/cart")}>
                <img src={IconCart} alt="Icon" />
            </FloatingButton> : <></>}
            <AppBar>
                {back ? <IconImg src={IconBack} onClick={ () => navigate(-1)} /> : <div style={{ width: "25px" }}></div>}
                <LogoImg src={Logo} />
                <IconImg onClick={() => { setUserData({}); navigate("/signin"); }} src={userData.token ? IconSignout : IconSignin} />
            </AppBar>
            <PageBody>{children}</PageBody>
        </Page>
    );
}