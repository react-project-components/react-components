import React from 'react';
import {Pagination} from '@component';


export default class PaginationTest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Pagination className='margin-bottom-md' current={12} total={20}/>
        </div>
        <div>
          <Pagination className='margin-bottom-md' current={1} total={1}/>
        </div>
        <div>
          <Pagination className='margin-bottom-md' current={1} total={2}/>
        </div>
        <div>
          <Pagination className='margin-bottom-md' current={1} total={3}/>
        </div>
        <div>
          <Pagination className='margin-bottom-md' current={1} total={4}/>
        </div>
        <div>
          <Pagination className='margin-bottom-md' current={3} total={5}/>
        </div>
        <div>
          <Pagination className='margin-bottom-md' current={3} total={6}/>
        </div>
        <div>
          <Pagination className='margin-bottom-md' current={2} total={7}/>
        </div>
      </div>
    );
  }
}
