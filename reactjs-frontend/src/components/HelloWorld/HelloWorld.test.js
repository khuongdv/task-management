import React from 'react';
import HelloWorld from './HelloWorld.react';
import renderer from 'react-test-renderer';

it('helloworld', () => {
  const component = renderer.create(
    <HelloWorld url="hello.com"/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
