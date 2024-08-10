import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../Assets/payment.css'; 

const PaymentPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');
    const [openDialog, setOpenDialog] = useState(false);

    const handlePayment = () => {
        console.log('Card Number:', cardNumber);
        console.log('Expiry Date:', expiryDate);
        console.log('CVV:', cvv);
        console.log('Name:', name);
        
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div className="payment-container">
            <Paper elevation={3} className="payment-paper">
                <Typography variant="h5" gutterBottom className="payment-header">Payment Details</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Card Number"
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            margin="normal"
                            className="payment-textfield"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Expiry Date (MM/YY)"
                            type="text"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            margin="normal"
                            className="payment-textfield"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="CVV"
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            margin="normal"
                            className="payment-textfield"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Cardholder Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            margin="normal"
                            className="payment-textfield"
                        />
                    </Grid>
                </Grid>
                <div className="button-container">
                    <Button 
                        variant="contained" 
                        className="payment-button"
                        onClick={handlePayment}
                    >
                        Pay Now
                    </Button>
                </div>
            </Paper>

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Payment Successful</DialogTitle>
                <DialogContent className="dialog-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircleOutlineIcon style={{ fontSize: 50, color: 'green', marginBottom: '10px' }} />
                    <Typography variant="body1" className='payd' >
                        Your payment has been processed successfully.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} className="dialog-button">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default PaymentPage;
