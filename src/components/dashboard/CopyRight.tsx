import { Link, Typography } from '@mui/material'



const CopyRight = (props:any) => {
  return (
    // Copyright c Lorena's repo 2022

    <Typography variant="body2" color="GrayText" align="center" {...props}>
        {"Copyright ©"} {' '}
        <Link color="inherit" href="https://github.com/LoreLor/frontend-code-verified">
        <strong>Lorena 's Repo</strong>
        </Link>
        {' '} { new Date().getFullYear()}
    </Typography>
    )
}

export default CopyRight
