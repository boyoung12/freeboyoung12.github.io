 
            const byFormSerch = document.querySelector(".byHead");
			const byInputSerch = document.querySelector(".byHead input");
			
			
            Function handleSerch(event) {
				
				const SerchValue = byInputSerch.value;
                if (event.keyCode === null) {
                    event.preventDefault();
                }
                
                if (event.keyCode === 13) {
                    
                    window.location.href = SerchValue.href;
                }
            }

byFormSerch.addEventListener('submit', handleSerch);