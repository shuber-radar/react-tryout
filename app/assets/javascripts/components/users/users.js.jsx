var Users = React.createClass({
  getInitialState: function() {
    return { users: this.props.initialUsers };
  },

  update(val) {
    let newState = this.state.users.splice();
    newState[this.state.users.indexOf(val)] = val;
    this.setState({
      newState
    });
  },

  saveAll() {
    this.state.users.forEach((user)=>{
      this.saveUser(user);
    });
  },

  saveUser(user){
    window.$.ajax({
      method: 'put',
      url: `/users/${user.id}.json`,
      data: {
        'user': user,
        'X-CSRF-Token': document.head.querySelector('[name=csrf-token]').content
      }
    })
    .done(function(res){
      console.log(res);
    })
  },

  render: function() {
    return (
      <div id="users">
        <h1>Users</h1>
        <UsersOverview
          users={this.state.users}
        />
        <UserForms
          users={this.state.users}
          update={this.update}
          saveUser={this.saveUser}
          saveAll={this.saveAll}
        />
      </div>
    );
  }
});
