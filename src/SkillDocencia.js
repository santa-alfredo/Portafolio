import {ButtonBase, Grid,useTheme,Typography, makeStyles, Button, useMediaQuery, Card, CardContent, CardActions, styled } from "@material-ui/core";
import Cancel from "@material-ui/icons/Cancel";
import clsx from "clsx";
import Image from 'next/image'
import { useRef } from "react";
import simpleIcons from 'simple-icons'
import useAnimate from "./useAnimate";
import { iconify } from "./util";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '70%',
    maxHeight: '70%',
  });

const Tarjeta = ({argumentos})=>{
    return<>
        <CardContent>
            <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="complex" src={argumentos.imagen} />
            </ButtonBase>
            <Typography variant="h5" component="div">
            {argumentos.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {argumentos.adjetive}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </>
}

const useStyles = makeStyles(theme => ({
    cont: {
        minHeight: `calc(30vh - ${theme.spacing(4)}px)`,
     
    },
    skobj: {
        marginBottom: theme.spacing(4)
    },
    avatar: {
        height: theme.spacing(7),
        width: theme.spacing(7),
        padding: theme.spacing(1.5)
    },
}))

function SkillDocencia() {
    const classes = useStyles()
    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const align = mdDown ? "center" : "flex-end"
    const textAlign = mdDown ? "center" : "right"
    return (
        <>
        <Typography variant="h3" component="div">Habilidades en Docencia</Typography>
        <br></br>
        <Grid container spacing={4} className={classes.cont}>
            <Grid item xs>
                <Card variant="outlined">
                    <Tarjeta argumentos={{
                        title:"Instalacion",
                        adjetive:"Instalacion y Administracion de plataformas educativas. Una de las mas conocidad y open source moodle",
                        imagen:"http://www.articaonline.com/wp-content/uploads/2016/09/Moodle-1.png",
                    }}
                    />
                </Card>
            </Grid>
            <Grid item xs>
                <Card variant="outlined">
                    <Tarjeta argumentos={{
                        title:"Herramientas",
                        adjetive:"Conocimiento en herramientas offices. Conocimiento en aplicaciones de Google",
                        imagen:"https://i.blogs.es/7013e4/microsoft-office-sin-suscripcion-un-solo-pago-lanzamiento-2021-previa-abril/450_1000.jpg",
                        }}/>
                </Card>
            </Grid>
            <Grid item xs>
                <Card variant="outlined">
                    <Tarjeta argumentos={{
                        title:"Tecnologias",
                        adjetive:"Manejo de plataformas para reuniones virtuales con estudiantes para la enseñanza",
                        imagen:"https://niixer.com/wp-content/uploads/2020/12/herramientas-virtuales.png",
                        }}/>
                </Card>
            </Grid>
            <Grid item xs>
                <Card variant="outlined">
                    <Tarjeta argumentos={{
                        title:"Elaboraciones",
                        adjetive:"Planificaciones Curriculares \n Planificaciones MicroCurriculares \n Elaboracion de Rubricas",
                        imagen:"https://www.complicefm.com/noticias/fotos/5004.jpg",
                        }}/>
                </Card>
            </Grid>
        </Grid>
        </>
    )
}

export default SkillDocencia