import {
	AiFillGithub,
	AiFillFacebook,
	AiFillGoogleCircle,
	AiFillTwitterCircle,
} from "react-icons/ai";

export default function SocialMediaAuth() {
	return (
		<div className="flex flex-col items-center mt-4 gap-4">
			<p className="text-[#828282] text-sm">
				or continue with these social profile
			</p>
			<div className="flex flex-row gap-4 text-[#828282]">
				<span className="p-2 rounded-full border-[1px] border-[#828282] cursor-pointer hover:text-white hover:border-white">
					<AiFillGithub size={25} />
				</span>
				<span className="p-2 rounded-full border-[1px] border-[#828282] cursor-pointer hover:text-white hover:border-white">
					<AiFillFacebook size={25} />
				</span>
				<span className="p-2 rounded-full border-[1px] border-[#828282] cursor-pointer hover:text-white hover:border-white">
					<AiFillGoogleCircle size={25} />
				</span>
				<span className="p-2 rounded-full border-[1px] border-[#828282] cursor-pointer hover:text-white hover:border-white">
					<AiFillTwitterCircle size={25} />
				</span>
			</div>
		</div>
	);
}
