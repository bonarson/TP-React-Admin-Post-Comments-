
import React, { createContext } from "react";

import { Admin, Resource, ListGuesser, EditGuesser, TextField, EditButton, Datagrid, SimpleForm, TextInput } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const PostList = (props: any) => (
  <ListGuesser {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="user.name" label="User Name" />
      <EditButton />
      <TextField source="commentButton" label="Comment Button" />
    </Datagrid>
  </ListGuesser>
);

const PostEdit = (props: any) => (
  <EditGuesser {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <TextInput source="user.name" label="User Name" />
      <TextInput source="commentButton" label="Comment Button" />
    </SimpleForm>
  </EditGuesser>
);

const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} />
  </Admin>
);

export default AdminApp;
