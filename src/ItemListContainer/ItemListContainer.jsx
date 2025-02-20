const ItemListContainer = ({ greeting }) => {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100px',
      backgroundColor: '#cce7ff',
      border: '1px solid #99c2ff',
      borderRadius: '8px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '16px'
    };
  
    const textStyle = {
      fontSize: '20px',
      fontWeight: '600',
      color: '#00509e'
    };
  
    return (
      <div style={containerStyle}>
        <h2 style={textStyle}>{greeting}</h2>
      </div>
    );
  };
  
  export default ItemListContainer;
  