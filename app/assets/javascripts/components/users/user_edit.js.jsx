var UserEdit = React.createClass({
  update: function(e) {
    let data = this.props.user;
    data[e.target.name] = e.target.value;
    this.props.update(data);
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.saveUser(this.props.user);
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.props.user.name}
            onChange={this.update}
          />
          <label>E-Mail:</label>
          <input
            type="text"
            name="email"
            value={this.props.user.email}
            onChange={this.update}
          />
          <label>Admin:</label>
          <input
            type="checkbox"
            name="admin"
            checked={this.props.user.admin}
            onChange={this.update}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
});
