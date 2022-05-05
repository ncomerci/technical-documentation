import * as React from 'react'
import "./style.scss"
import Hit from '../components/Hit';
import { connectHits } from 'react-instantsearch-dom';

export default function ConnectedResultHits () {

    const ResultHits = ({ hits }) => {
        console.log(hits, 1234)
        return (
          <div className='result-page-hits-wrapper'>
            { hits.map(hit => { return <Hit hit={hit}/> } )}
          </div>
      )};

    const CustomHits = connectHits(ResultHits);

    return (
      <CustomHits />
  )};