import styles from './Alert.module.scss';

const Alert = ({children, type}) => {
  
  const variant = type === 'success' ? styles.alert__success : styles.alert__error;
  return (
    <div className={variant}>
      {children}
    </div>
  )
}

export default Alert;