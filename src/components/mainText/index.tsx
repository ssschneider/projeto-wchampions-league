import {
	BtnTrailer,
	PlayersImage,
	Text,
	TextSection,
	Title,
	Wrapper,
} from "./styles";
import TitleImg from "../../assets/images/title.svg";
import PlayersImg from "../../assets/images/players.svg";

const Main = () => {

	return (
		<Wrapper>
			<TextSection>
				<Title src={TitleImg} alt="Logo da Champions League Feminina" />
				<Text>
					Lorem ipsum dolor sit amet consectetur. Aliquam facilisi
					urna porttitor vel eget nisl lacus bibendum. Tincidunt
					vehicula nullam vel mauris. Sit eu eros nibh est netus
					fermentum id. Gravida viverra a iaculis ultricies sed
					gravida. Mauris facilisis auctor turpis congue.
				</Text>
                <BtnTrailer href="https://www.youtube.com/watch?v=cuhfrOp7QcA" target="_blank">Veja o Trailer</BtnTrailer>
			</TextSection>

			<PlayersImage
				src={PlayersImg}
				alt="Jogadoras do Barcelona se abraçando pós gol"
			/>

            
		</Wrapper>
	);
};

export default Main;
