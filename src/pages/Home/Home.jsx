import React, { useState, useEffect } from 'react';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { TestCard } from '../../common/TestCard/TestCard';
import { testData, select } from '../testSlice';
import { getTests } from '../../services/apiCalls';


export const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [tests, setTests] = useState([]);
    const datosReduxTests = useSelector(testData)

    useEffect(() => {
        if (tests.length === 0) {
            setTimeout(() => {
                getTests()
                    .then(
                        resultado => {
                            setTests(resultado.data);
                        }
                    )
                    .catch(error => console.log(error));
            }, 1000);
        };
    }, [tests]);

    const Choosen = (test) => {
        dispatch(select({ choosen: test }))
        setTimeout(() => {
            navigate("/TestDetail");
        }, 250);
    }

    return (
        <div className='homeDesign'>
            {datosReduxTests.tests.length > 0 ? (
                <div className='rosterDesign'>
                    {datosReduxTests.tests.map(
                        test => {
                            return (
                                <div onClick={() => Choosen(test)} key={test._id}>
                                    <TestCard test={test} />
                                </div>
                            )
                        }
                    )}
                </div>
            ) :
                (
                    tests.length > 0 ? (
                        <div className='rosterDesign'>
                            {tests.map(
                                test => {
                                    return (
                                        <div onClick={() => Choosen(test)} key={test._id}>
                                            <TestCard test={test} />
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    ) : (
                        <div></div>
                    )
                )
            }
        </div>
    );
 };