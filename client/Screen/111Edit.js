import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Header,
  Title,
  Container,
  Content,
  Body,
  Button,
  Text,
  Icon,
  Right,
  Left,
  Form,
  ListItem,
  Item,
  Label,
  Input,
} from "native-base";
import SecurityService from "../security/SecurityService";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions


// START IMPORT ACTIONS
import 111Actions from "../redux/actions/111Actions";

// END IMPORT ACTIONS

/** APIs

* actions111.create
*	@description CRUD ACTION create
*
* actions111.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actions111.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/


class 111Edit extends Component {
  
  // Init 111
  constructor(props) {
    super(props);
    this.state = {
      111: {},
      authorized: false
    };
  }

  // Load data on start
  componentWillMount() {

    this.props.navigation.addListener("willFocus", async () => { 
      // Check security
      if (await SecurityService.isAuth([  ])) {
        this.setState({ authorized: true });
      } else {
        this.props.navigation.navigate("Login", {
          showError: "Not authorized"
        });
        return;
      }


      // Load data
      const itemId = this.props.navigation.getParam("id", "new");
      if (itemId !== "new") {
        this.props.actions111.load111(itemId);
      } else {
        this.setState({
          111: {}
        });
      }
      
    });
  }

  // Clear reducer
  componentWillUnmount() {
    this.setState({
      111: {}
    });
    this.props.actions111.reset();
  }

  // Insert props 111 in state
  componentWillReceiveProps(props) {
    this.setState({
      111: props.111
    });
  }

  // Save data
  save() {
    // Validation
    let errors = {};
    

    this.setState({ errors: errors });
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Save
    if (this.state.111._id) {
      // Edit
      this.props.actions111.save111(this.state.111).then(data => {
        this.props.navigation.navigate("111List");
      });
    } else {
      // Create
      this.props.actions111.create111(this.state.111).then(data => {
        this.props.navigation.navigate("111List");
      });
    }
  }

  // Show content
  render() { 

    // Check security
    if (!this.state.authorized) {
      return null;
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Detail 111</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.save()}>
              <Text>Save</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            
            <Item floatingLabel>
              <Label>
                A
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.111, { a: value }))
                }
                value={this.state.111.a && this.state.111.a.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                E
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.111, { e: value }))
                }
                value={this.state.111.e && this.state.111.e.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                M
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.111, { m: value }))
                }
                value={this.state.111.m && this.state.111.m.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                N
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.111, { n: value }))
                }
                value={this.state.111.n && this.state.111.n.toString()}
              />
            </Item>
          



          </Form>
        </Content>
      </Container>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actions111: bindActionCreators(111Actions, dispatch),
  };
};

// Validate types
111Edit.propTypes = { 
  actions111: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    111: state.111EditReducer.111
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(111Edit);

const styles = StyleSheet.create({
  validatorItem: { borderColor: "red" },
  validatorLabel: { color: "red" },
  validatorMessage: { color: "red", marginLeft: 15, marginTop: 5 }
});
