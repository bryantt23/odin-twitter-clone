import { FormControl, InputLabel, Input, FormHelperText, TextField } from '@mui/material';


function SignUp() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>SignUp</h1>
            <div>
                <form>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="email">Email address</InputLabel>
                            <Input id="email" />
                            <FormHelperText id="my-helper-text">Enter your email</FormHelperText>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input
                                variant="outlined" id="username" />
                            <FormHelperText id="my-helper-text">Enter your username</FormHelperText>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <TextField
                                label="Password"
                                // onChange={e => setPassword(e.target.value)}
                                required
                                variant="outlined"
                                color="secondary"
                                type="password"
                                // value={password}
                                // error={passwordError}
                                fullWidth
                                sx={{ mb: 3 }}
                            />
                            <FormHelperText id="my-helper-text">Enter your password</FormHelperText>
                        </FormControl>
                    </div>
                </form></div>
        </div>
    )
}

export default SignUp