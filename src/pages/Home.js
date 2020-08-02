import React, { Component } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      teams: []
    };
  }
  getMatch = async () => {
    try {
      const header = {
        headers: {
          'X-Auth-Token': 'b4546d523461485cb8555904e0009dda'
        }
      };
      const teams = await axios.get('http://api.football-data.org/v2/competitions/2021/teams', header);
      this.setState({
        isLoading: false,
        teams: teams.data.teams
      });
      console.log(match.data)
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount = () => {
    this.getMatch();
  }

  render() {
    const { isLoading, teams } = this.state;
    return (
      <SafeAreaView style={style.scaffold}>
        <ScrollView>
          <View style={style.body}>
            {!isLoading && teams.map((val, key) => (
              <ListItem
                key={key}
                leftAvatar={{ source: { uri: val.crestUrl } }}
                title={val.shortName}
                subtitle={val.venue}
                bottomDivider
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  scaffold: {
    backgroundColor: '#fff',
    flex: 1,
  },
  head: {
    flex: 1,
    backgroundColor: '#d2272e',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headContent: {
    alignContent: 'space-between',
    alignItems: 'center'
  },
  headDate: {
    marginTop: 10,
    alignItems: 'center'
  },
  body: {
    backgroundColor: '#fff',
    flex: 2,
  },
  textWhite: {
    color: '#fff',
  }
})