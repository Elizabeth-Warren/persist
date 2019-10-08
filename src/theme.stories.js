import React from 'react';
import { addParameters } from '@storybook/react';
import styled from 'styled-components';
import theme from './theme';

addParameters({ actions: { disabled: true } });

const UnstyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default { title: 'Theme' };

export const colors = () => {
  const List = styled(UnstyledList)`
    display: grid
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  `;
  const ListItem = styled.li`
    align-items: center;
    display: flex;
  `;
  const Swatch = styled.div`
    background: ${({ bgColor }) => bgColor};
    border: 1px solid ${theme.colors.grey};
    height: 80px;
    margin-right: 8px;
    width: 80px;
  `;
  return (
    <div>
      <p><code>theme.colors</code></p>
      <List>
        {Object.entries(theme.colors).map(([name, value]) => (
          <ListItem key={value}>
            <Swatch bgColor={value} />
            <div>
              <b>{name}</b>
              <br />
              {value}
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export const fontFamily = () => (
  <div>
    <p><code>theme.fontFamily</code></p>
    <UnstyledList>
      {Object.entries(theme.fontFamily).map(([name, value]) => (
        <li style={{ fontFamily: value, fontSize: theme.fontSize.lg, marginBottom: '16px' }}>
          <b>
            {`${name}: `}
          </b>
          {value}
        </li>
      ))}
    </UnstyledList>
  </div>
);

export const fontSize = () => (
  <div>
    <p><code>theme.fontSize</code></p>
    <UnstyledList>
      {Object.entries(theme.fontSize).map(([name, value]) => (
        <li style={{ fontSize: value, marginBottom: '16px' }}>
          <b>
            {`${name}: `}
          </b>
          {value}
        </li>
      ))}
    </UnstyledList>
  </div>
);

export const leading = () => {
  const sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae dui nec purus efficitur ullamcorper. Vivamus congue tellus vitae metus elementum, a facilisis magna malesuada. Etiam rhoncus felis vehicula lacus sodales, eget rutrum ipsum sodales. Nunc at odio suscipit, faucibus est sed, scelerisque justo.';
  return (
    <div>
      <p><code>theme.leading</code></p>
      <UnstyledList>
        {Object.entries(theme.leading).map(([name, value]) => (
          <li style={{ marginBottom: '16px', maxWidth: '400px' }}>
            <div>
              <b>
                {`${name}: `}
              </b>
              {value}
            </div>
            <p style={{ lineHeight: value, margin: 0 }}>{sampleText}</p>
          </li>
        ))}
      </UnstyledList>
    </div>
  );
};

export const maxWidth = () => (
  <div>
    <p><code>theme.maxWidth</code></p>
    <p>
Commonly used
      {' '}
      <code>max-width</code>
      {' '}
values.
    </p>
    <UnstyledList>
      {Object.entries(theme.maxWidth).map(([name, value]) => (
        <li style={{ marginBottom: '16px' }}>
          <div>
            <b>
              {`${name}: `}
            </b>
            {value}
          </div>
          <div style={{
            background: theme.colors.liberty, width: '100%', maxWidth: value, height: '200px',
          }}
          />
        </li>
      ))}
    </UnstyledList>
  </div>
);

export const screens = () => (
  <div>
    <p><code>theme.screens</code></p>
    <p>Media query breakpoints.</p>
    <UnstyledList>
      {Object.entries(theme.screens).map(([name, value]) => (
        <li>
          <b>
            {`${name}: `}
          </b>
          {value}
        </li>
      ))}
    </UnstyledList>
  </div>
);

export const spacing = () => (
  <div>
    <p><code>theme.spacing</code></p>
    <p>
      Spacing values (for padding/margin). These are all multiples of 8, so the
      naming convention is &quot;sp[x]&quot; where the spacing value is 8 * x
      (with the exception of sp0).
    </p>
    <UnstyledList>
      {Object.entries(theme.spacing).map(([name, value]) => (
        <li style={{ display: 'flex', marginBottom: '16px' }}>
          <div style={{ marginRight: '16px', width: '80px' }}>
            <b>
              {`${name}: `}
            </b>
            {value}
          </div>
          <div style={{
            background: theme.colors.liberty, width: value, height: value,
          }}
          />
        </li>
      ))}
    </UnstyledList>
  </div>
);
