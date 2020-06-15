
import React from 'react';
import PropTypes from 'prop-types';
import { List, Form, Checkbox } from 'semantic-ui-react';

const PortalListItemCheckbox = (props) => {
  const { item: { id, label, name, value }, handleChange } = props;

  return (
    <List.Item key={id}>
      <List.Content>
        <Form.Field>
          <Checkbox
            label={label}
            name={name}
            value={value}
            onChange={handleChange}
          />
        </Form.Field>
      </List.Content>
    </List.Item>
  );
};
PortalListItemCheckbox.propTypes = {
  item: PropTypes.object,
  handleChange: PropTypes.func
};

export { PortalListItemCheckbox };
