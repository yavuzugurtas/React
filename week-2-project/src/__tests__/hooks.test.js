import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8, Ex9, Ex10, Ex11, Ex12, Ex13, Ex14 } from '../hooks';

test('Exercice 1', () => {
  const { getByText } = render(<Ex1 />);

  // find intial text
  getByText(/Hello 世界/i);

  // click on button
  const button = getByText(/translation please/i)
  fireEvent.click(button)

  // find updated text
  getByText(/Hello World/i)

});

test('Exercice 2', () => {
  const { getByText } = render(<Ex2 />);

  // find intial text
  getByText(/Hello 世界/i);

  // click on button
  const button = getByText(/translation please/i)
  fireEvent.click(button)

  // find updated text
  getByText(/Hello World/i)

  // click on button again
  fireEvent.click(button)

  // find original text
  getByText(/Hello 世界/i);

});

test('Exercice 3', () => {
  const { getByText } = render(<Ex3 />);

  // find intial text
  getByText(/Hello 世界/i);

  // click on button
  const button = getByText(/translation please/i)
  fireEvent.click(button)

  // find updated text
  getByText(/Hello World/i)

  // click on button again
  fireEvent.click(button)

  // find original text
  getByText(/Hello 世界/i);

  // click on button again again
  fireEvent.click(button)

  // find updated text
  getByText(/Hello World/i)

});

test('Exercice 4', () => {
  const { getByText } = render(<Ex4 />);

  // find intial text
  getByText(/Hello 世界/i);
  getByText(/Translation to english please/i);

  // click on button
  const button = getByText(/Translation to english please/i)
  fireEvent.click(button)

  // find updated text
  getByText(/Hello World/i)
  getByText(/Translation to japanese please/i);

});

test('Exercice 5', () => {
  const { getByText } = render(<Ex5 />);

  // find intial value
  getByText('0');

  // click on button
  const button = getByText(/click/i)
  fireEvent.click(button)

  // find updated vzlue
  getByText('1')

  fireEvent.click(button)

  getByText('2');

});

test('Exercice 6', () => {
  const { getByText } = render(<Ex6 />);

  // find intial value
  getByText('0');

  // click on button
  const button = getByText(/click/i)
  fireEvent.click(button)

  // find updated vzlue
  getByText('1')

  fireEvent.click(button)

  getByText('1');

  fireEvent.click(button)

  getByText('2');

  fireEvent.click(button)

  getByText('3');

  fireEvent.click(button)

  getByText('5');

});

test('Exercice 7', () => {
  const { getByText } = render(<Ex7 />);

  getByText("0")

  // click on button
  const button = getByText(/click me/i)
  fireEvent.click(button)

  // find count
  getByText("1")
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  getByText("5")

});

test('Exercice 8', () => {
  const { getByText, getAllByRole} = render(<Ex8 />);

  const buttons = getAllByRole('button')

  buttons.forEach((button, i) => {
    fireEvent.click(button)
    getByText("I like " + button.textContent)
  })

});

test('Exercice 9', () => {
  const { getByText, getAllByRole} = render(<Ex9 />);

  const buttons = getAllByRole('button')

  buttons.forEach((button, i) => {
    fireEvent.click(button)
    getByText("Last click: " + button.textContent)
  })

});

test('Exercice 10', () => {
  const { queryByText, getByText, getByRole} = render(<Ex10 />);

  getByText("docker")
  getByText("kubernetes")

  expect(queryByText("containerd")).toBeNull()
  const button = getByRole('button')

  fireEvent.click(button)
  getByText("containerd")

});

test('Exercice 11', () => {
  const { queryByText, getByText, getByRole} = render(<Ex11 />);

  const default_list = ['ipsizzle', 'nullizzle', 'sapizzle', 'velizzle', 'crackalackin', 'maurizzle', 'rhoncizzle']

  default_list.forEach(item => expect(queryByText(item)).toBeNull())
  
  const button = getByRole('button')

  for(let i = 0, length1 = default_list.length; i < length1-2; i++){
    fireEvent.click(button)
    for(let j = 0; j <= i; j++){
      getByText(default_list[j])
    }
    default_list.slice(i+2).forEach(item => expect(queryByText(item)).toBeNull())

  }
});

test('Exercice 12', () => {
  const my_list = ['surf', 'fencing', 'taekwondo']
  const { queryByText, getByText, getByRole} = render(<Ex12 base_list={my_list}/>);

  my_list.forEach(item => expect(queryByText(item)).toBeNull())
  
  const button = getByRole('button')

  for(let i = 0, length1 = my_list.length; i < length1-2; i++){
    fireEvent.click(button)
    for(let j = 0; j <= i; j++){
      getByText(my_list[j])
    }
    my_list.slice(i+2).forEach(item => expect(queryByText(item)).toBeNull())

  }
});

test('Exercice 13', () => {
  const default_list = ['ipsizzle', 'nullizzle', 'sapizzle', 'velizzle', 'crackalackin', 'maurizzle', 'rhoncizzle']
  const { queryByText, getByText, getByRole} = render(<Ex13/>);

  default_list.forEach(item => expect(queryByText(item)).toBeNull())
  
  const addButton = getByText('Add element')
  const removeButton = getByText('Remove element')

  for(let i = 0, length1 = default_list.length; i < length1-2; i++){
    fireEvent.click(addButton)
    for(let j = 0; j <= i; j++){
      getByText(default_list[j])
    }
    default_list.slice(i+2).forEach(item => expect(queryByText(item)).toBeNull())
  }

  // fast & furious testing

  fireEvent.click(removeButton)
  fireEvent.click(removeButton)
  fireEvent.click(removeButton)
  fireEvent.click(removeButton)
  
  getByText('ipsizzle')
  getByText('nullizzle')
  getByText('sapizzle')
  default_list.slice(3).forEach(item => expect(queryByText(item)).toBeNull())

});

test('Exercice 14', () => {
  const my_list = ['surf', 'fencing', 'taekwondo']
  const { queryByText, getByText, getByRole} = render(<Ex14 base_list={my_list}/>);

  my_list.forEach(item => expect(queryByText(item)).toBeNull())
  
  const addButton = getByText('Add element')
  const removeButton = getByText('Remove element')

  for(let i = 0, length1 = my_list.length; i < length1-2; i++){
    fireEvent.click(addButton)
    for(let j = 0; j <= i; j++){
      getByText(my_list[j])
    }
    my_list.slice(i+2).forEach(item => expect(queryByText(item)).toBeNull())
  }

  // fast & furious testing

  fireEvent.click(removeButton)
  fireEvent.click(removeButton)

  
  getByText('surf')
  my_list.slice(1).forEach(item => expect(queryByText(item)).toBeNull())

});

