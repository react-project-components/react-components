import React from 'react';
import Pagination from '../../components/pagination';


export default class PaginationTest extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Pagination current={12} total={20} />
                <Pagination current={1} total={1} />
                <Pagination current={1} total={2} />
                <Pagination current={1} total={3} />
                <Pagination current={1} total={4} />
                <Pagination current={3} total={5} />
                <Pagination current={3} total={6} />
                <Pagination current={2} total={7} />
            </div>
        );
    }
}
