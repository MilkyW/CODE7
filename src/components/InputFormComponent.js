'use strict';

import React from 'react';
import ReactDOM from 'react-dom'

require('styles//InputForm.css');

class AddTag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: new Set(),
      error: false
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }

  handleAdd() {
    this.setState(function (prevState) {
      let ntags = prevState.tags;
      ntags.add(this.input.value);
      this.input.value = '';
      return ({
        tags: ntags,
        error: ntags.size > 20 ? true : false
      });
    });
  }

  handleDel(e) {
    e.persist();
    this.setState(function (prevState) {
      let ntags = prevState.tags;
      let value = e.target.innerText;
      ntags.delete(value);
      return ({
        tags: ntags,
        error: ntags.size > 20 ? true : false
      });
    });
  }

  keyDown(e) {
    e = (e) ? e : ((window.event) ? window.event : '')
    let keyCode = e.keyCode ? e.keyCode : (e.which ? e.which : e.charCode);
    if (keyCode == 13) {
        this.handleAdd();
    }
  }

  componentDidMount () {
    this.input = ReactDOM.findDOMNode(this.refs['inputTag']);
  }

  componentWillUnmount () {
    this.input = null;
  }

  render() {
    let tags = [];
    this.state.tags.forEach(t => (
      tags.push(<span className="label label-default" onClick={this.handleDel} key={t}>{t}</span>)
    ))
    return (
      <div className="form-group">
        <div className={this.state.error ? 'input-group has-error' : 'input-group'}>
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.handleAdd}>Add</button>
          </span>
          <input type="text" className="form-control" id="inputTag" placeholder="tag less than 20" ref="inputTag" onKeyDown={this.keyDown}/>
          <span className="input-group-addon">
            {tags}
          </span>
        </div>
      </div>
    );
  }
}

class InputFormComponent extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" placeholder="Title"/>
        </div>
        <div className="form-group">
          <label htmlFor="link">Link</label>
          <input type="text" className="form-control" id="link" placeholder="URL"/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" placeholder="Description" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="img">Image</label>
          <input type="file" id="img"/>
        </div>
        <AddTag />
        <button type="button" className="btn btn-primary">Submit</button>
        <button type="reset" className="btn btn-default">Reset</button>
      </form>
    );
  }
}

InputFormComponent.displayName = 'InputFormComponent';

// Uncomment properties you need
// InputFormComponent.propTypes = {};
// InputFormComponent.defaultProps = {};

export default InputFormComponent;
