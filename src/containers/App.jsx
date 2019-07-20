import React from 'react';
import { bool, func, number } from 'prop-types'
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

App.propTypes = {
    result: number,
    loading: bool,
    onReset: func
}

const mapState = state => state;
const mapDispatch = dispatch => ({onReset: () => dispatch(closeModal())});

export default connect(mapState, mapDispatch)(App);