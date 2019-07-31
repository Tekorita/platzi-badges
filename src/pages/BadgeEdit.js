import React from 'react'
import './styles/BadgeEdit.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import api from '../api'

class BadgeEdit extends React.Component {
    state = {
        loading: true,
        error: null,
        form:{
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null})
        try {
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({ loading: false, form: data })
        }catch (error) {
            this.setState({ loading: false, error: error })
        }
    }
    /*
    1era opcion o manera de levantar el estado y traer los valores 
    handleChange = e => {
        const nextForm = this.state.form
        nextForm[e.target.name] = e.target.value
        this.setState({
            form: nextForm
        })
    }
    
    */

    //2da opcion o manera de levantar el estado y traer los valores 
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form, //destructuramos el objeto de state form para traer la infor
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault() //detenemos el evento
        this.setState({ loading: true, error: null })
        try{
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({ loading: false })
            this.props.history.push('/badges')
        } catch (error){
            this.setState({ loading: false, error: error })
        }
    }

    render(){
        if (this.state.loading){
            return <PageLoading />
        }
        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">                   
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo" /> 
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName  || 'FIRST_NAME'} 
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'} 
                                twitter={this.state.form.twitter || 'TWITTER'}
                                email={this.state.form.email || 'EMAIL'}
                                avatarUrl="https://firebasestorage.googleapis.com/v0/b/davidpalmalugo-6ffa4.appspot.com/o/yo3.jpg?alt=media&token=b80bc1df-ea46-4595-abfc-a692be4b2f90"                  
                                />  
                        </div>
                        <div className="col-6">
                            <h1>Edit attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit} 
                                formValues={this.state.form}
                                error={this.state.error}
                            />  
                        </div>
                    </div>
                </div>
            </React.Fragment>       
        )
    }
}

export default BadgeEdit