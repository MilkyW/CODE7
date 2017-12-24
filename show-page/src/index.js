import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  PageHeader, Media, Panel, ListGroup, ListGroupItem, Label, ButtonToolbar,
  Button, FormGroup, ControlLabel, FormControl, HelpBlock, Form,
  Pagination, ButtonGroup, Grid, Row, Col
} from 'react-bootstrap';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var series_name = 'React从入门到摔门';
document.title = series_name;
var creator = '但愿浓密';
var time = "2017/12/23 23:51";
var stars = 4.9;

const big = (
  <div>
    <Form inline>
      <PageHeader>{series_name}
        <small><Label>{stars}</Label></small>
        <small><h4>{creator + "  " + time}</h4></small>
      </PageHeader>
    </Form>
  </div>
);
ReactDOM.render(
  big,
  document.getElementById('title')
);

class StarButton extends Component {
  constructor() {
    super();
    this.state = {active: false};
  }

  render() {
    return (
      <Button bsStyle="primary" onClick={this.handleClick.bind(this)} block>
        {this.state.active ? '☆UNSTAR' : '★STAR'}
      </Button>
    );
  }

  handleClick() {
    let active = this.state.active;
    this.setState({active: !active});
  }
}

class ThumbButton extends Component {
  constructor() {
    super();
    this.state = {active: false};
  }

  render() {
    return (
      <Button bsStyle="info" onClick={this.handleClick.bind(this)} block>
        {this.state.active ? '♡UNTHUMB' : '❤THUMB'}
      </Button>
    );
  }

  handleClick() {
    let active = this.state.active;
    this.setState({active: !active});
  }
}

var score = 0;

class Score extends Component {
  constructor() {
    super();
    this.state = {activePage: score};
  }

  render() {
    return (
      <Pagination className="Pagination-score"
                  bsSize="large"
                  items={5}
                  activePage={this.state.activePage}
                  onSelect={this.handleSelect.bind(this)} block/>
    );
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
    score = eventKey;
  }
}

const wellStyles = {maxWidth: 260, margin: '0 auto 10px'};

const THUMB_STAR = (
  <div className="well" style={wellStyles}>
    <ButtonGroup vertical block>
      <Score/>
      < ThumbButton/>
      < StarButton/>
    </ButtonGroup>
  </div >
);

ReactDOM.render(THUMB_STAR, document.getElementById('starit'));

function FieldGroup({id, label, help, ...props}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const formInstance = (
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={10}>
          <form>
            <Panel header="发表评论" bsStyle="info">
              <FieldGroup
                id="formControlsEmail"
                type="title"
                label="标题"
                placeholder="请输入标题"
              />
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>正文</ControlLabel>
                <FormControl componentClass="textarea" placeholder="请输入正文"/>
              </FormGroup>
              <Button type="submit">
                提交
              </Button>
            </Panel>
          </form>
        </Col>
      </Row>
    </Grid>
  )
;
ReactDOM.render(formInstance, document.getElementById('givcomments'));

function get_comments(series_name) {
  var arr = [["MilkyW", "2017/12/20 12:20", "炒鸡棒", "(╬▔皿▔)"],
    ["kaclarpt", "2017/12/20 15:37", "厉害惹", "(~￣▽￣)~"],
    ["liueo", "2017/12/21 16:25", "肥肠好", "≡(▔﹏▔)≡"],
    ["Atorios", "2017/12/22 09:19", "666", "ㄟ( ▔, ▔ )ㄏ ",]];
  return arr;
};

var commentsss = get_comments(series_name);

var com_sum = 0;

const mediaAlignmentInstance = (
  <div>
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={10}>
          <Panel header="评论" bsStyle="primary">
            <ListGroup fill>
              {
                commentsss.map(function (currentValue) {
                  /* if (currentValue[4] && typeof(currentValue[4]) != "undefined" && currentValue[4] != 0) {
                   }*/
                  com_sum = com_sum + 1;
                  let x = (
                    <ListGroupItem>
                      <Media>
                        <Media.Left>
                          <img width={64} height={64} src={"./assets/" + currentValue[0] + ".jpg"} alt="Image"/>
                        </Media.Left>
                        <Media.Body>
                          <Media.Heading>{currentValue[2]}
                            <small>{'\t' + currentValue[1]}</small>
                          </Media.Heading>
                          <p>{currentValue[3]}</p>
                        </Media.Body>
                      </Media>
                    </ListGroupItem>);
                  return x;
                })
              }
            </ListGroup>
          </Panel>
        </Col>
      </Row>
    </Grid>
  </div>
);
ReactDOM.render(mediaAlignmentInstance, document.getElementById('comments'));
