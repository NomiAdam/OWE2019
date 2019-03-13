import React from 'react';
import Section from '../components/Section';
import {patientsUrl} from '../constants';
import {PersonalData, Symptoms, Medicaments} from '../components/PacientInformation';
import { Link } from 'react-router-dom'

class Patient extends React.Component {
    state = {
        patient: {},
    };

    componentDidMount() {
        fetch(patientsUrl)
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({patient: jsonResponse})
            }).catch((err) => console.error(err));
    }

    render() {
        const {patient} = this.state;
        const symptoms = patient.symptoms || {};
        const personalData = patient.personalData || {};
        const medicaments = patient.pharmaceuticals || [];
        return (
            <div>
                <div className={'Content Grid'}>
                    <Section heading={'Osobní údaje'} body={
                        <PersonalData personalData={personalData}/>
                    }/>
                    <Section heading={'Příznaky'} body={
                        <Symptoms symptoms={symptoms}/>
                    }/>
                    <Section heading={'Medikamenty'} body={
                        <Medicaments medicaments={medicaments}/>}
                    />
                </div>
                <div>
                    <div className={'FlexSpacer Padding10'}>
                <Link to={'/'} className={'Button'} >Button</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Patient;
