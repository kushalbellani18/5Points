function Alert({children, onClose}) {
	return (
	<>
		<div className="alert alert-primary alert-dismissible"> 
			{children}
			<button type="button" onClick={onClose} className="btn-close" data-dismiss="alert" aria-label="Close"></button>
		</div>
	</>
	);
}

export default Alert;
