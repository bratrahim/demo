import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import Modal from '../components/Modal';
import { closeModal } from '../stateManagement';

const App = ({ result, loading, onReset }) => {
    return <>
    <Form loading={loading} />
    {result && <Modal content={result} onClose={onReset}/>}
</>
}

const mapState = state => state;
const mapDispatch = dispatch => ({onReset: () => dispatch(closeModal())});

export default connect(mapState, mapDispatch)(App);