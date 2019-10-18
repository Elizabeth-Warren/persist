import React from 'react';
import BodyCopy, { BodyCopySizes } from '../components/BodyCopy';
import theme from '../theme';
import useBreakpoint from './useBreakpoint';

export default {
  title: 'Hooks/useBreakpoint',
  parameters: { jest: ['useBreakpoint'] },
};

const Docs = () => (
  <>
    <p>
The
      {' '}
      <code>useBreakpoint</code>
      {' '}
hook takes a breakpoint map, which would be an object of key/value pairs where
the key is the name of the breakpoint and the value is the min-width for that value.
    </p>
    <p>
      The Persist breakpoint map looks like the object below, but any map can be
      passed in to this hook.
    </p>
    <p><pre>{JSON.stringify(theme.screens, null, 2)}</pre></p>
  </>
);

export const current = () => {
  const { current: currentBp } = useBreakpoint(theme.screens);
  return (
    <div>
      <Docs />
      <p>
The
        {' '}
        <code>current</code>
        {' '}
property exposed by
        {' '}
        <code>useBreakpoint</code>
        {' '}
returns the name of the current breakpoint.
      </p>
      <BodyCopy as="p" size={BodyCopySizes.XL}>
Current breakpoint is:
        {' '}
        <b>{currentBp}</b>
      </BodyCopy>
    </div>
  );
};

export const isAbove = () => {
  const { isAbove: isAboveBp } = useBreakpoint(theme.screens);
  return (
    <div>
      <Docs />
      <p>
        <code>isAbove</code>
        {' '}
        returns
        {' '}
        <code>true</code>
        {' '}
        if the current breakpoint
        is above or inclusively
        {' '}
        <em>matching</em>
        {' '}
        a specified breakpoint. Optionally, you
        can disable inslusivity by setting the second argument to
        <code>false</code>
        .
      </p>
      {Object.keys(theme.screens).map((bp) => (
        <>
          <p>
            Is above or matching
            {' '}
            <b>{bp}</b>
            :
            {' '}
            {isAboveBp(bp) ? 'true' : 'false'}
          </p>
          <p>
            Is above but not matching
            {' '}
            <b>{bp}</b>
            :
            {' '}
            {isAboveBp(bp, false) ? 'true' : 'false'}
          </p>
        </>
      ))}
    </div>
  );
};

export const isBelow = () => {
  const { isBelow: isBelowBp } = useBreakpoint(theme.screens);
  return (
    <div>
      <Docs />
      <p>
        <code>isBelow</code>
        {' '}
        returns
        {' '}
        <code>true</code>
        {' '}
        if the current breakpoint is below a specified breakpoint. Unlike
        {' '}
        <code>isAbove</code>
, this is
        {' '}
        <em>not</em>
        {' '}
inclusive by default because we want to be building components mobile-first.
        Optionally, you can enable inslusivity by setting the second argument to
        <code>true</code>
        .
      </p>
      {Object.keys(theme.screens).map((bp) => (
        <>
          <p>
            Is below or matching
            {' '}
            <b>{bp}</b>
            :
            {' '}
            {isBelowBp(bp, true) ? 'true' : 'false'}
          </p>
          <p>
            Is below but not matching
            {' '}
            <b>{bp}</b>
            :
            {' '}
            {isBelowBp(bp) ? 'true' : 'false'}
          </p>
        </>
      ))}
    </div>
  );
};
