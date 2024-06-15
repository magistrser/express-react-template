import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LinkedCamera from '@mui/icons-material/LinkedCamera';
import {routes} from '@client/routes';
import {useNavigate} from 'react-router-dom';

export const MenuItems: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ListItem
        button
        onClick={() => navigate(routes.examplePage)}
      >
        <ListItemIcon>
          <LinkedCamera/>
        </ListItemIcon>
        <ListItemText primary="Камеры"/>
      </ListItem>
    </div>
  );
};
