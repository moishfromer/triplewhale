import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  IndexTable,
  TextStyle,
  useIndexResourceState,
} from '@shopify/polaris';
import { fetchOrdersData } from './tableSlice';


export default function Table() {

  const ordersData = useSelector(state => state.table.data);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchOrdersData()), [dispatch])

  const resourceName = {
    singular: 'order',
    plural: 'orders',
  };

  const {
    selectedResources,
    allResourcesSelected,
    handleSelectionChange,
  } = useIndexResourceState(ordersData);

  const rowMarkup = ordersData.map(
    ({order_id, customer_name, price, date}, index) => (
      <IndexTable.Row
        id={order_id}
        key={order_id}
        selected={selectedResources.includes(order_id)}
        position={index}
      >
        <IndexTable.Cell>
          <TextStyle variation="strong">{`#${order_id}`}</TextStyle>
        </IndexTable.Cell>
        <IndexTable.Cell>{date}</IndexTable.Cell>
        <IndexTable.Cell>{customer_name}</IndexTable.Cell>
        <IndexTable.Cell>{price}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );

  return (
    <Card>
      <IndexTable
        resourceName={resourceName}
        itemCount={ordersData.length}
        selectedItemsCount={
          allResourcesSelected ? 'All' : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={[
          {title: 'Order'},
          {title: 'Date'},
          {title: 'Customer'},
          {title: 'Total'},
          {title: 'Payment'},
        ]}
      >
        {rowMarkup}
      </IndexTable>
    </Card>
  );
}