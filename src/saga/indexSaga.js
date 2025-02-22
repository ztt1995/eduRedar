import {fork} from 'redux-saga/effects'

import {getPersonalRecordFlow} from './personalSaga'
import {getGeneralGpaRecordFlow} from './generalSaga'
import {getStudentGroupFlow} from './generalSaga'
import {getGroupCountFlow} from './groupSaga'
import {getGroupCountRecords} from './groupSaga'
import {getGroupStudentsFlow} from './groupSaga'

export default function* rootSaga(){
    yield fork(getPersonalRecordFlow)
    yield fork(getGeneralGpaRecordFlow)
    yield fork(getStudentGroupFlow)
    yield fork(getGroupCountFlow)
    yield fork(getGroupCountRecords)
    yield fork(getGroupStudentsFlow)
}