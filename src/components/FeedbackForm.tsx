import React from 'react';
import {Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

export const FeedbackForm = () => {
    return <>
        <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
            <Grid.Column style={{maxWidth: 450}}>
                <Header as='h2' color='blue' textAlign='center'>
                    Submit a message
                </Header>
                <Form size='large'>
                    <Segment stacked textAlign="left">
                        <Form.Input fluid label="Name" labelPosition="left" placeholder="Your Name" />
                        <Form.Field>
                            <label>Time Mark</label>
                            <input placeholder='12:34'/>
                        </Form.Field>
                        <Form.TextArea label='Message' placeholder='Any message you want to post'/>
                        <Button color="blue" type='submit'fluid size='large'>
                            Submit
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    </>
}
