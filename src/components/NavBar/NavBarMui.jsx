import { Link } from "react-router-dom";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Home from "@mui/icons-material/Home";
import Person from "@mui/icons-material/Person";

export default function HorizontalList() {
  return (
    <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
      <List role="menubar" orientation="horizontal">
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component={Link}
            to="/HomePage"
            aria-label="Home"
          >
            <Home />
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component={Link} to="/Contacto">
            Contacto
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component={Link} to="/HomePage">
            Inicio
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <ListItemButton role="menuitem" component={Link} to="/AcercaDeMi">
            Acerca de Mi{" "}
          </ListItemButton>
        </ListItem>
        <ListDivider />

        <ListItem role="none" sx={{ marginInlineStart: "auto" }}>
          <ListItemButton
            role="menuitem"
            component={Link}
            to="/profile"
            aria-label="Profile"
          >
            <Person />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}