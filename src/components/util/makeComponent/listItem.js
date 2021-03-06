import React,{ useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Grid , Button} from '@material-ui/core';
import {nonCamelCaseMaker} from '../camelCaseMaker' 

const useStyles = makeStyles((theme) => ({
    root: {
          width: '100%',
          textAlign: 'center',
          marginBottom : 10
    },
    heading: {
      margin: '0 auto',
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightRegular,
      color:'#000'
    },
    gridRoot : {
       flexGrow:1,
    },
    showList : {
        display: 'table',
        width: '100%',
        background: '#dedede',
        textAlign: 'center',
        fontSize : '1.5em',
        fontWeight : 'bolder',
        margin: '0 auto'
    } ,

    table : { 
        textAlign: 'center',
        margin: 'auto',
        padding: '1rem 0px',
        width: '100%',
     },

    mainTableStyle : {
        background : '#dbdddc'
    }


  }));

  const tableStyle = {
    textAlign: 'center',
    margin: 'auto',
    // border:'1px solid #dedede',
    padding: '1rem ',
    width: '90%',

  }


const ListItem = ({itemData , index , handleDelete}) => { 
    const [isExpand , setIsExpand] = useState(false)
    const classes = useStyles()
    
    const getKeyByValue = (object, value) =>  {
        return Object.keys(object).find(key => object[key] === value);
      }

    const iteratableData =[]
    const iteratablekey = []

    for (var key in itemData){
        if (itemData.hasOwnProperty(key)){
            
            if (typeof itemData[key] === 'string'){ 
                iteratableData.push(getKeyByValue(itemData , itemData[key]))               
                iteratablekey.push(key)               
            }
        }
    }


    const listItems = []

    iteratableData.map( (data , index) =>  listItems.push( 
            <tr className={classes.mainTableStyle}>
                 <td style={tableStyle}> { nonCamelCaseMaker(iteratablekey[index])} </td>
                 <td style={tableStyle}> {itemData[data]} </td>
            </tr>) )
    
    
       
    return (

        itemData[iteratableData[0]] && (<div className={classes.root}>
            <ExpansionPanel 
                expanded={isExpand} 
            >
                <ExpansionPanelSummary
                onClick={() => setIsExpand(prv => !prv)}  
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{background : '#f5f0e6'}}
                >
                <Typography className={classes.heading}>{itemData[iteratableData[0]]}</Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails style={{justifyContent:'center'}}>
                <Typography component={'div'}>
                    <div className={classes.gridRoot}>
                        <Grid container spacing={3}>
                        <Grid item xs={12}>
                        <div className="showList">
                            <table className={classes.table}  cellpadding="55">
                                    {/* <thead style={tableStyle}>
                                        <tr style={tableStyle}>
                                            <th style={tableStyle}></th>
                                            <th style={tableStyle}></th>
                                        </tr>
                                    </thead> */}
                                    <tbody style={tableStyle}>                                   
                                        {listItems}                                                                              
                                    </tbody>
                            </table>
                        </div>

                        </Grid>
                        <Grid item xs={12}>
                                <Button
                                        variant="contained"
                                        color="primary"
                                        style={{ background : '#42c99a'}}
                                        onClick={() => {handleDelete(index) ; setIsExpand(false)} }
                                > 
                                    Delete 
                                </Button>
                        </Grid>
                        </Grid>
                    </div>
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            </div>)
    )
}

export default ListItem


