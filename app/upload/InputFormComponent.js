'use strict';

import React from 'react';
import ReactDOM from 'react-dom'

// require('styles//InputForm.css');

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

class RelatedLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: new Set()
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }

  handleAdd() {
    this.setState(function (prevState) {
      let nlinks = prevState.links;
      nlinks.add(this.input.value);
      this.input.value = '';
      return ({
        links: nlinks
      });
    });
  }

  handleDel(e) {
    e.persist();
    this.setState(function (prevState) {
      let nlinks = prevState.links;
      let value = e.target.innerText;
      nlinks.delete(value);
      return ({
        links: nlinks
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
    this.input = ReactDOM.findDOMNode(this.refs['rlink']);
  }

  componentWillUnmount () {
    this.input = null;
  }

  render() {
    let llist = [];
    this.state.links.forEach(link => (
      llist.push(<li className="list-group-item" onClick={this.handleDel} key={link}>{link}</li>)
    ))
    return (
      <div className={this.props.error? 'form-group has-error' : 'form-group'}>
        <div className="input-group">
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.handleAdd}>Add</button>
          </span>
          <input type="text" className="form-control" id="rlink" placeholder={this.props.placeholder}  onKeyDown={this.keyDown} ref="rlink"/>
        </div>
        <ul className="list-group">
          {llist}
        </ul>
      </div>
    );
  }
}

class InputFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {
        title: false,
        link: false,
        description: false,
        img: false,
      },
      rlinkError: false
     }

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit() {
    let result = {
      title: this.refs['title'].value,
      description: this.refs['des'].value,
      // blink: this.refs['basic'].state.links,
      //--------------------------------------
      img: '', // add event listener
      tags: this.refs['addTag'].state.tags,
      rlinks: this.refs['rlink'].state.links,
      //--------------------------------------
      difficulty: this.state.difficulty
    }
    this.setState((prevState) => ({
      error: {
        title: !result.title,
        link: !result.link,
        description: !result.description,
        img: false,
      }
    }));
    for (let prop in this.state.error) {
      if (this.state.error[prop]) {
        return;
      }
    }
    if (!this.props.onSubmit(result)) {
      this.setState({
        rlinkError: true
      });
    } else {
      this.setState({
        rlinkError: false
      });
    }
  }

  render() {
    return (
      <form>
        <div className={this.state.error.title? 'form-group has-error' : 'form-group'}>
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" placeholder="Title" ref="title"/>
        </div>
        <div className={this.state.error.link? 'form-group has-error' : 'form-group'}>
          <label htmlFor="basic">基础</label>
          <RelatedLink ref="basic" id="basic" placeholder="基础链接"/>
          <label htmlFor="intermediate">进阶</label>
          <RelatedLink ref="intermediate" id="basic" placeholder="进阶链接"/>
          <label htmlFor="advanced">高级</label>
          <RelatedLink ref="advanced" id="basic" placeholder="高级链接"/>
        </div>
        <div className={this.state.error.description? 'form-group has-error' : 'form-group'}>
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" placeholder="Description" rows="3" ref="des"></textarea>
        </div>
        <AddTag ref="addTag"/>
        <label htmlFor="rlink">拓展链接</label>
        <RelatedLink ref="rlink" id="rlink" error={this.state.rlinkError}/>
        <div className="form-group">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            <button type="reset" className="btn btn-default">Reset</button>
          </div>
        </div>
      </form>
    );
  }
}

InputFormComponent.displayName = 'InputFormComponent';

// Uncomment properties you need
// InputFormComponent.propTypes = {};
// InputFormComponent.defaultProps = {};

export default InputFormComponent;
