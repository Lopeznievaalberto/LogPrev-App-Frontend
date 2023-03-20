import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../pages/User/userSlice";
import { testData, find, clear } from '../../pages/testSlice';

//import { InputText } from '../InputText/InputText';
import { getSearch } from '../../services/apiCalls';

export const Header = () => {

    const dispatch = useDispatch();
    const initial = {
        token: '',
        user: {}
    }

    const [search, setSearch] = useState([]);
    const datosReduxUsuario = useSelector(userData);
    const datosReduxTests=useSelector(testData);

        useEffect(() => {

            if (search !== "") {
                getSearch(search)
                    .then(
                        resultado => {
                            dispatch(find({ tests: resultado.data }))
                        }
                    ).catch(error => console.log(error));
            } else if (search === "" && datosReduxTests.tests.length > 0) {
                dispatch(clear({ choosen: {}, tests: [] }));
            }

        }, [search])

    const navigate = useNavigate();

    const logOff = () => {
        dispatch(logout({ userPass: initial }))
        navigate("/")
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const ResetHome = () => {
        dispatch(clear({ choosen: {}, tests: [] }));
        navigate("/")
    }

    const searchErrorHandler = (e) => {
        console.log(e,"no se encontró nada");
    }

    return (
        <div className='headerDesign'>

            {/* <div onClick={() => ResetHome()} className='logoDesignHeader'><img id="logoHome" className='cameraAvatar' src={Logo} alt="Camara" /></div>
            <div className='searchDesign'>
                <InputText
                    type={"text"}
                    name={"search"}
                    className={'inputDesign'}
                    placeholder={"Introduce la busqueda"}
                    functionHandler={handleSearch}
                    errorHandler={searchErrorHandler}
                />
            </div> */}
            <div className='headerLinksDesign'>
                {datosReduxUsuario.userPass.rol === "admin" &&
                    <div onClick={() => navigate("/admin")} className='linkDesign'>admin</div>
                }
                {datosReduxUsuario.userPass.token !== "" ?
                    (<>
                        <div onClick={() => navigate("/profile")} className='linkDesign' >{datosReduxUsuario.userPass?.name}</div>
                        <div className='linkDesign' onClick={() => logOff()}>logout</div>
                    </>)
                    : (
                        <>
                            <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/login") }, 200)}>login</div>
                            <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/register") }, 200)}>register</div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

