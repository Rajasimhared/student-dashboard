import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import styles from './styles.module.css';

const LoginForm = ({
  form: { getFieldDecorator, validateFields, setFields }
}) => {
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const onFormSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        setLoading(true);
        setTimeout(() => setRedirect(true), 500);
      }
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Sign in to Access your account</div>
      <Form onSubmit={onFormSubmit}>
        <Form.Item className={styles.textbox}>
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: 'Please enter your Email!' },
              { type: 'email', message: 'Please enter a valid Email!' }
            ]
          })(<Input placeholder="Email" size="large" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please enter your password!!' }]
          })(<Input placeholder="Password" type="password" size="large" />)}
        </Form.Item>
        <Form.Item>
          <a href="/reset" style={{ float: 'right', color: '#969696' }}>
            Forgot password?
          </a>
        </Form.Item>
        <div
          style={{
            justifyContent: 'center',
            display: 'flex',
            marginTop: 50,
            marginBottom: 90
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            className={styles.button}
            loading={loading}
          >
            SIGN IN
          </Button>
        </div>
        <Divider></Divider>
        <div
          style={{
            justifyContent: 'center',
            display: 'flex'
          }}
        >
          New User?&nbsp;
          <Link to="/signup">Register</Link>
        </div>
      </Form>
      {redirect && <Redirect to="/dashboard" />}
    </div>
  );
};

export default Form.create({ name: 'login_form' })(LoginForm);
